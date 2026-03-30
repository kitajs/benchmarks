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
* __Node:__ `v20.20.1`
* __Run:__ Mon Mar 30 2026 02:06:10 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| bare                     | v20.20.1 | ✗      | 47834.4    | 20.40        | 8.53          |
| fastify                  | 4.29.1   | ✓      | 46832.8    | 20.84        | 8.40          |
| kita                     | 1.1.36   | ✓      | 46740.8    | 20.88        | 8.38          |
| rayo                     | 1.4.6    | ✓      | 46667.2    | 20.92        | 8.32          |
| connect                  | 3.7.0    | ✗      | 46576.8    | 20.97        | 8.31          |
| polka                    | 0.5.2    | ✓      | 46358.4    | 21.07        | 8.27          |
| server-base-router       | 7.1.32   | ✓      | 46149.6    | 21.17        | 8.23          |
| server-base              | 7.1.32   | ✗      | 45563.2    | 21.45        | 8.13          |
| polkadot                 | 1.0.0    | ✗      | 44720.8    | 21.87        | 7.98          |
| connect-router           | 1.3.8    | ✓      | 43661.6    | 22.40        | 7.79          |
| 0http                    | 3.5.3    | ✓      | 42456.0    | 23.05        | 7.57          |
| h3                       | 1.15.10  | ✗      | 40598.4    | 24.13        | 7.24          |
| h3-router                | 1.15.10  | ✓      | 39757.6    | 24.65        | 7.09          |
| restana                  | 4.9.9    | ✓      | 37634.6    | 26.08        | 6.71          |
| koa                      | 2.16.4   | ✗      | 35736.2    | 27.48        | 6.37          |
| hono                     | 4.12.9   | ✓      | 35430.6    | 27.71        | 5.81          |
| take-five                | 2.0.0    | ✓      | 35144.2    | 27.94        | 12.64         |
| restify                  | 11.1.0   | ✓      | 34835.0    | 28.20        | 6.28          |
| koa-isomorphic-router    | 1.0.1    | ✓      | 34664.2    | 28.35        | 6.18          |
| koa-router               | 12.0.1   | ✓      | 32906.0    | 29.89        | 5.87          |
| hapi                     | 21.4.7   | ✓      | 31816.8    | 30.91        | 5.67          |
| fastify-big-json         | 4.29.1   | ✓      | 11483.6    | 86.51        | 132.13        |
| express                  | 4.22.1   | ✓      | 11171.4    | 88.94        | 1.99          |
| express-with-middlewares | 4.22.1   | ✓      | 9925.3     | 100.15       | 3.69          |
| micro-route              | 2.5.0    | ✓      | N/A        | N/A          | N/A           |
| micro                    | 10.0.1   | ✗      | N/A        | N/A          | N/A           |
| microrouter              | 3.1.3    | ✓      | N/A        | N/A          | N/A           |
| trpc-router              | 10.45.4  | ✓      | N/A        | N/A          | N/A           |
