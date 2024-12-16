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
* __Node:__ `v20.18.1`
* __Run:__ Mon Dec 16 2024 01:34:07 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| bare                     | v20.18.1 | ✗      | 48003.2    | 20.35        | 8.56          |
| kita                     | 1.1.36   | ✓      | 46867.2    | 20.83        | 8.40          |
| fastify                  | 4.29.0   | ✓      | 46848.0    | 20.85        | 8.40          |
| connect                  | 3.7.0    | ✗      | 46386.4    | 21.06        | 8.27          |
| rayo                     | 1.4.6    | ✓      | 46267.2    | 21.10        | 8.25          |
| server-base              | 7.1.32   | ✗      | 46200.0    | 21.13        | 8.24          |
| polka                    | 0.5.2    | ✓      | 46073.6    | 21.21        | 8.22          |
| polkadot                 | 1.0.0    | ✗      | 45488.8    | 21.49        | 8.11          |
| 0http                    | 3.5.3    | ✓      | 45183.2    | 21.63        | 8.06          |
| server-base-router       | 7.1.32   | ✓      | 44820.0    | 21.83        | 7.99          |
| connect-router           | 1.3.8    | ✓      | 43435.2    | 22.51        | 7.75          |
| h3                       | 1.13.0   | ✗      | 43093.6    | 22.71        | 7.69          |
| h3-router                | 1.13.0   | ✓      | 41871.2    | 23.39        | 7.47          |
| hono                     | 4.6.14   | ✓      | 40430.4    | 24.23        | 6.63          |
| restana                  | 4.9.9    | ✓      | 38896.0    | 25.21        | 6.94          |
| koa                      | 2.15.3   | ✗      | 37427.0    | 26.22        | 6.67          |
| restify                  | 11.1.0   | ✓      | 35023.0    | 28.05        | 6.31          |
| take-five                | 2.0.0    | ✓      | 34940.6    | 28.11        | 12.56         |
| koa-isomorphic-router    | 1.0.1    | ✓      | 34740.6    | 28.27        | 6.20          |
| koa-router               | 12.0.1   | ✓      | 34173.0    | 28.76        | 6.09          |
| hapi                     | 21.3.12  | ✓      | 32153.6    | 30.59        | 5.73          |
| fastify-big-json         | 4.29.0   | ✓      | 11912.2    | 83.37        | 137.05        |
| express                  | 4.21.2   | ✓      | 10926.0    | 90.94        | 1.95          |
| express-with-middlewares | 4.21.2   | ✓      | 10365.1    | 95.88        | 3.86          |
| micro-route              | 2.5.0    | ✓      | N/A        | N/A          | N/A           |
| micro                    | 10.0.1   | ✗      | N/A        | N/A          | N/A           |
| microrouter              | 3.1.3    | ✓      | N/A        | N/A          | N/A           |
| trpc-router              | 10.45.2  | ✓      | N/A        | N/A          | N/A           |
