<div align="center">
  <img src="https://github.com/fastify/graphics/raw/HEAD/fastify-landscape-outlined.svg" width="650" height="auto"/>
</div>

<div align="center">

[![CI](https://github.com/fastify/fastify/workflows/ci/badge.svg)](https://github.com/fastify/fastify/actions/workflows/ci.yml)
[![Coverage Status](https://coveralls.io/repos/github/fastify/fastify/badge.svg?branch=master)](https://coveralls.io/github/fastify/fastify?branch=master)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](http://standardjs.com/)
[![NPM version](https://img.shields.io/npm/v/fastify.svg?style=flat)](https://www.npmjs.com/package/fastify)
[![NPM downloads](https://img.shields.io/npm/dm/fastify.svg?style=flat)](https://www.npmjs.com/package/fastify) [![Discord](https://img.shields.io/discord/725613461949906985)](https://discord.gg/fastify)

</div>
<br />

# TL;DR

* [Fastify](https://github.com/fastify/fastify) is a fast and low overhead web framework for Node.js.
* This package shows how fast it is comparatively.
* For metrics (cold-start) see [metrics.md](./METRICS.md)

# Requirements

To be included in this list, the framework should captivate users' interest. We have identified the following minimal requirements:
- **Ensure active usage**: a minimum of 500 downloads per week
- **Maintain an active repository** with at least one event (comment, issue, PR) in the last month
- The framework must use the **Node.js** HTTP module

# Usage

Clone this repo. Then 

```
node ./benchmark [arguments (optional)]
```

#### Arguments

* `-h`: Help on how to use the tool.
* `compare`: Get comparative data for your benchmarks.

> You may also compare all test results, at once, in a single table; `benchmark compare -t`

> You can also extend the comparison table with percentage values based on fastest result; `benchmark compare -p`
# Benchmarks

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Node:__ `v20.19.5`
* __Run:__ Mon Sep 22 2025 01:35:52 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| polka                    | 0.5.2    | ✓      | 47388.8    | 20.61        | 8.45          |
| bare                     | v20.19.5 | ✗      | 47352.8    | 20.63        | 8.44          |
| rayo                     | 1.4.6    | ✓      | 47198.4    | 20.68        | 8.42          |
| fastify                  | 4.29.1   | ✓      | 47172.0    | 20.67        | 8.46          |
| server-base              | 7.1.32   | ✗      | 47016.0    | 20.75        | 8.39          |
| kita                     | 1.1.36   | ✓      | 46455.2    | 21.00        | 8.33          |
| connect                  | 3.7.0    | ✗      | 46191.2    | 21.11        | 8.24          |
| server-base-router       | 7.1.32   | ✓      | 46088.0    | 21.19        | 8.22          |
| 0http                    | 3.5.3    | ✓      | 44998.4    | 21.73        | 8.02          |
| polkadot                 | 1.0.0    | ✗      | 44707.2    | 21.87        | 7.97          |
| h3                       | 1.15.4   | ✗      | 43688.0    | 22.39        | 7.79          |
| connect-router           | 1.3.8    | ✓      | 42942.4    | 22.79        | 7.66          |
| h3-router                | 1.15.4   | ✓      | 42490.4    | 23.04        | 7.58          |
| restana                  | 4.9.9    | ✓      | 39519.2    | 24.81        | 7.05          |
| hono                     | 4.9.8    | ✓      | 37966.4    | 25.81        | 6.23          |
| koa                      | 2.16.2   | ✗      | 37904.2    | 25.88        | 6.76          |
| take-five                | 2.0.0    | ✓      | 35557.0    | 27.63        | 12.78         |
| restify                  | 11.1.0   | ✓      | 35046.2    | 28.03        | 6.32          |
| koa-isomorphic-router    | 1.0.1    | ✓      | 34929.0    | 28.13        | 6.23          |
| koa-router               | 12.0.1   | ✓      | 33945.0    | 28.94        | 6.05          |
| hapi                     | 21.4.3   | ✓      | 32259.0    | 30.50        | 5.75          |
| fastify-big-json         | 4.29.1   | ✓      | 11707.4    | 84.86        | 134.69        |
| express                  | 4.21.2   | ✓      | 11086.0    | 89.63        | 1.98          |
| express-with-middlewares | 4.21.2   | ✓      | 10434.0    | 95.22        | 3.88          |
| micro-route              | 2.5.0    | ✓      | N/A        | N/A          | N/A           |
| micro                    | 10.0.1   | ✗      | N/A        | N/A          | N/A           |
| microrouter              | 3.1.3    | ✓      | N/A        | N/A          | N/A           |
| trpc-router              | 10.45.2  | ✓      | N/A        | N/A          | N/A           |
